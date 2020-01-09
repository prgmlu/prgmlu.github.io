from glob import glob

file_list = []
a = glob('build/*/index.html')
b = glob('build/*/*/index.html')
c = glob('build/*/*/*/index.html')

file_list = [*a,*b,*c]

replacement_string = '''
<head><!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155624787-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-155624787-1');
</script>
'''


for f in file_list:
    file_str = open(f).read()
    new_file_str = file_str.replace('<head>',replacement_string)
    open(f,'w').write(new_file_str)