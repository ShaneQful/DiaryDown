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

#### Enabling Git & SCP

If you want to enable git & scp in the script to commit the Diary to a repo and then scp it to the server. Just uncomment the lines at the bottom of the ruby script and replace puts out with

	File.open('Diary.html', 'w') do |f1|  
	  f1.puts out
	end

Then change the user@server to the appropriate user & server's for you. You'll no longer need to cat the result to a file the out will just be in Diary.html. Inorder for it to work on the server the diary.js & markdown.css already have to put in the appropriately directory on the sever.

### Example:

An example diary written with this tool can be seen [here](http://shaneqful.github.com).

### License

This software is MIT licensed, see LICENSE.txt for details.

Basically do whatever you like with it but there's no warranty and you can't remove the copyright.

### Credits:

* Uses markdown css from [kevin burke.](http://kevinburke.bitbucket.org/markdowncss/)

* Uses [Jquery](http://jquery.com/)
