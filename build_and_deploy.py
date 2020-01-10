import os
os.system('npm run build')
os.system('python insert_tags.py')
os.system('cp -r build/*')
os.system('git acp')

