import sys
import datetime
from shutil import copyfile
#must take a name
print(sys.argv)
if len(sys.argv)==1:
    print("Pass post name as an argument.")
today_date = str(datetime.date.today())
title = "{}-{}".format(today_date,sys.argv[1])
import os
try:
    os.mkdir('src/routes/posts/{}'.format(title))
except:
    pass
print('title = {}'.format(title))
print(os.getcwd())
copyfile('post_files/document.mdx','src/routes/posts/{}/document.mdx'.format(title))
copyfile('post_files/post.js','src/routes/posts/{}/post.js'.format(title))
copyfile('post_files/img.png','src/routes/posts/{}/img.png'.format(title))