#!/usr/bin/ruby
require "open3"

def bash input
	streams = Open3.popen3 input
	out = ""
	while((line=streams[1].gets) != nil)
		out += line
	end
	return out
end

file = File.open(ARGV[0], "rb")
diary = ""
file.readlines.each do |l|
	diary += l
end
file.close
entry_points = diary.scan /Date\s[a-zA-Z]+\s\d+\s[a-zA-Z]+\s\d{4}/
table_of_contents = "<div id=\"table\" style=\"position: fixed; right: 100px; top: 50px; display: block;\">"
table_of_contents += "\<h5>Table of Contents:</h5>\n<ol>"
count = 0
table_of_contents += "<div class=\"listgroup\" id=\"group#{count}\">"
entry_points.each do |e|
	diary = diary.gsub(e," <a name=\"#{e.gsub(/\s/,"")}\"></a>"+e)
	table_of_contents += "<li><a href=\"##{e.gsub(/\s/,"")}\">#{e}</a></li>\n"
	count += 1
	if(count % 15 == 0)
		table_of_contents += "</div><div class=\"listgroup\" style=\"display:none\" id=\"group#{count/15}\">"
	end
end
table_of_contents += "</div></ol><center><h5><a title=\"Previous Group(Ctrl-Left)\" "
table_of_contents += "onclick=\"changeGroup(false);\" style=\"cursor: pointer;\"><</a>"
table_of_contents += " <span id=\"gnum\">0</span> <a title=\"Next Group(Ctrl-Right)\" "
table_of_contents += "onclick=\"changeGroup(true);\"  style=\"cursor: pointer;\">></a></h5></center></div>"
diary['table_of_contents'] = table_of_contents
File.open('temp_diary', 'w') do |f1|  
  f1.puts diary
end 
bash "cat temp_diary | markdown > Diary.html"
bash "rm temp_diary"
#bash "scp Diary.html user@server:~/"
#File.open('move_diary.sh', 'w') do |f1|  
#  f1.puts "mv Diary.html public_html/"
#	f1.puts "chmod 444 public_html/Diary.html"
#end 
#bash "cat move_diary.sh | ssh user@server bash -s"
#bash "git add Diary.html Diary.md"
#bash "git commit -m \"#{ARGV[1]}\""
#bash "git push origin"
