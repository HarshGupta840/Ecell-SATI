// 'use client'
// import React, { useRef, useEffect, useState } from 'react'
// import JoditEditor from 'jodit-react'

// type Props = {}

// const Blog = ({}: Props) => {
//   const editor = useRef(null)
//   const [content, setContent] = useState('')
//   const buttons = [
//     'undo',
//     'redo',
//     '|',
//     'bold',
//     'strikethrough',
//     'underline',
//     'italic',
//     '|',
//     'superscript',
//     'subscript',
//     '|',
//     'align',
//     '|',
//     'ul',
//     'ol',
//     'outdent',
//     'indent',
//     '|',
//     'font',
//     'fontsize',
//     'brush',
//     'paragraph',
//     '|',
//     'image',
//     'link',
//     'table',
//     '|',
//     'hr',
//     'eraser',
//     'copyformat',
//     '|',
//     'fullsize',
//     'selectall',
//     'print',
//     '|',
//     'source',
//     '|',
//     {
//       name: 'insertMergeField',
//       tooltip: 'Insert Merge Field',
//       iconURL: 'images/merge.png',
//       popup: (editor: any, current: any, close: any) => {
//         function onSelected(e: any) {
//           let mergeField = e.target.value
//           if (mergeField) {
//             console.log(mergeField)
//             editor.selection.insertNode(
//               editor.create.inside.fromHTML('{{' + mergeField + '}}'),
//             )
//           }
//         }
//         let divElement = editor.create.div('merge-field-popup')

//         let labelElement = document.createElement('label')
//         labelElement.setAttribute('class', 'merge-field-label')
//         divElement.appendChild(labelElement)
//         console.log(divElement)
//         return divElement
//       },
//     },
//   ]
//   const editorConfig = {
//     readonly: false,
//     //defaultActionOnPaste: "insert_clear_html",
//     buttons: buttons,
//   }
//   return (
//     <>
//       <JoditEditor
//         ref={editor}
//         // config={editorConfig}
//         value={content}
//         onChange={(newContent) => setContent(newContent)}
//       />
//       {/* <div  dangerouslySetInnerHTML={{ __html: content }} /> */}
//     </>
//   )
// }

// export default Blog
import React from 'react'
import styles from './styles.module.css'

type Props = {}

const Blog = ({}: Props) => {
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default Blog
