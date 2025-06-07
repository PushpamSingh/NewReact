import {Editor} from '@tinymce/tinymce-react'
import {Controller, useForm} from 'react-hook-form'
export const RTE =({name="",control="",label,defaultValue=""})=>{
   
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'>{label}</label>
            }
            <Controller
            name={name||'content'}
            control={control}
            render={({field:{onChange}})=>(
            <Editor
                 apiKey='o85xynfyx5x0a4z1lxv4lf10nc8phf9pynlz97c3n5ndzg3z'
                initialValue={defaultValue}
                menubar:true
                init={
                    {
                        branding:false,
                        height:500,
                        menubar:true,
                        plugins:[
                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                            'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
                        ],
                        toolbar:'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        automatic_uploads: true,
                        
                    }
                }
                onEditorChange={onChange}
            />
            )}

            />
            
            
        </div>
    )
}