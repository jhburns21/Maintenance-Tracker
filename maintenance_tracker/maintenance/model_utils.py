
from enum import Enum


class UsageType(Enum):
    MILES = ('Miles', 'MILES')
    HOURS = ('Hours', 'HOURS')

    @classmethod
    def all(cls):
        return [cls.MILES, cls.HOURS]
