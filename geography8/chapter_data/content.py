"""Aggregate chapter content for the geography build pipeline."""
from geography8.chapter_data.ch1 import CHAPTER as _CH1
from geography8.chapter_data.ch2 import CHAPTER as _CH2
from geography8.chapter_data.ch3 import CHAPTER as _CH3
from geography8.chapter_data.ch4 import CHAPTER as _CH4
from geography8.chapter_data.ch5 import CHAPTER as _CH5
from geography8.chapter_data.ch6 import CHAPTER as _CH6
from geography8.chapter_data.ch7 import CHAPTER as _CH7
from geography8.chapter_data.ch8 import CHAPTER as _CH8

CHAPTER_CONTENT: dict[int, dict] = {
    1: _CH1,
    2: _CH2,
    3: _CH3,
    4: _CH4,
    5: _CH5,
    6: _CH6,
    7: _CH7,
    8: _CH8,
}
