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

post_js_text = open('src/routes/posts/{}/post.js'.format(title)).read()
post_js_text = post_js_text.replace('How to do git add commit and push in one command',sys.argv[1])
post_js_text = post_js_text.replace('using .gitconfig file.',sys.argv[1])

open('src/routes/posts/{}/post.js'.format(title),'w').write(post_js_text)


document_text = open('src/routes/posts/{}/document.mdx'.format(title)).read()
document_text = document_text.replace('How to easily use ssh step by step',sys.argv[1])


open('src/routes/posts/{}/document.mdx'.format(title),'w').write(document_text)


os.system('code src/routes/posts/"{}"/'.format(title))