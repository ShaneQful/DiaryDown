DiaryDown
=========

An awesome little piece of software used to create diaries with markdown

### Usage:

Write your diary in markdown. Start every entry with

	### Date Sat 26 Jan 2013

If you wish to start your entries with something else change the regex:

	/Date\s[a-zA-Z]+\s\d+\s[a-zA-Z]+\s\d{4}/

To whatever you what it to match too. 

When you what the html version just run.

	ruby diary_indexer.rb Example.md > Diary.html

### Example:

An example diary written with this tool can be seen [here](http://shaneqful.github.com).

### Credits:

* Uses markdown css from [kevin burke.](http://kevinburke.bitbucket.org/markdowncss/)

* Uses [Jquery](http://jquery.com/)
