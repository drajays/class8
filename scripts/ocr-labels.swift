// Reads image paths (one per line) on stdin, prints JSON lines:
// {"img": path, "w": px, "h": px, "words": [{"t", "c", "x", "y", "w", "h"}]}  (box in 0–1, top-left origin)
// Uses macOS Vision, no dependencies. Run: swift scripts/ocr-labels.swift < list.txt
import Foundation
import Vision
import AppKit

while let path = readLine() {
  guard let img = NSImage(contentsOfFile: path),
        let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { continue }
  let req = VNRecognizeTextRequest()
  req.recognitionLevel = .accurate
  req.usesLanguageCorrection = false
  try? VNImageRequestHandler(cgImage: cg).perform([req])
  var words: [[String: Any]] = []
  for obs in req.results ?? [] {
    guard let top = obs.topCandidates(1).first else { continue }
    let b = obs.boundingBox
    words.append(["t": top.string, "c": top.confidence,
                  "x": b.minX, "y": 1 - b.maxY, "w": b.width, "h": b.height])
  }
  let obj: [String: Any] = ["img": path, "w": cg.width, "h": cg.height, "words": words]
  if let d = try? JSONSerialization.data(withJSONObject: obj), let s = String(data: d, encoding: .utf8) { print(s) }
}
