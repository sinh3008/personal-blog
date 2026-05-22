import codecs

with codecs.open('f:/Website/personal-blog/pages/ai-prompts.html', 'r', 'utf-8') as f:
    html = f.read()

start_marker = 'const allPrompts = ['
end_marker = '];'
idx1 = html.find(start_marker)
idx2 = html.find(end_marker, idx1)

if idx1 != -1 and idx2 != -1:
    array_content = html[idx1:idx2+2]
    
    with codecs.open('f:/Website/personal-blog/data/prompts.js', 'w', 'utf-8') as f2:
        f2.write('window.AllPrompts = ' + array_content[len('const allPrompts = '):] + '\\n')
        
    new_html = html[:idx1] + 'const allPrompts = window.AllPrompts || [];' + html[idx2+2:]
    
    script_tag = '<script src=\"/data/prompts.js\"></script>\\n    <script src=\"/data/site.js\"></script>'
    new_html = new_html.replace('<script src=\"/data/site.js\"></script>', script_tag)
        
    with codecs.open('f:/Website/personal-blog/pages/ai-prompts.html', 'w', 'utf-8') as f:
        f.write(new_html)
    print('Successfully moved prompts to data/prompts.js')
else:
    print('Could not find prompts array')
