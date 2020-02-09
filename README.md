# workout
https://serene-wildwood-40635.herokuapp.com/

## Description

This is a workout tracker made by Ben Honken.  It uses mLab and mongo to track all of your workout data as it is entered.  You can create new workouts or continue old ones.  You can add cardio and resistance exercises.  Once you have some data, you can look at your dashboard to see your recent stats.  Offline functionality is also a work in progress.  All pages can load, and I attempted to catch failed API calls by sending them to indexeddb, submitting and clearing stored entries on reconnect.  The ability to store data while offline is currently still bugged.  

[home](images/home.png)
[new exercise](images/newExercise.png)
[dashboard](images/dashboard.png)

## Usage

As a person who takes fitness seriously, I want to record my workouts so I can track my exercise and my progress.  

## Credits

Ben Honken made this based on trilogy's base.

## License

MIT License

Copyright (c) [2020] [Ben Honken]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
