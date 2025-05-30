// import React from "react"
// import { Form, Input, Button, message } from "antd"
// import {
//   InfoCircleOutlined,
//   DeleteOutlined,
//   PlusOutlined,
// } from "@ant-design/icons"

// const ProductComponent = () => {
//   const [form] = Form.useForm()

//   const onAddNewKeyword = () => {
//     const fields = form.getFieldValue("popularSearches") || []
//     form.setFieldsValue({ popularSearches: [...fields, { keyword: "" }] })
//   }

//   const onDeleteKeyword = (index) => {
//     const fields = form.getFieldValue("popularSearches") || []
//     const updatedFields = fields.filter((_, i) => i !== index)
//     form.setFieldsValue({ popularSearches: updatedFields })
//   }

//   const onSave = async () => {
//     try {
//       await form.validateFields()
//       message.success("All fields are valid. Saved successfully!")
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div className="content-wrapper-with-bg">
//       <Form form={form} name="popular_searches_form" layout="vertical">
//         <div className="form-title-with-border ant-row ant-row-middle">
//           <span>Popular Searches</span>
//           <span className="anticon icon-16 m-l-8">
//             <InfoCircleOutlined />
//           </span>
//         </div>
//         <div className="gray-text m-b-16">
//           Add and manage popular search keywords below.
//         </div>
//         <Form.List name="popularSearches" initialValue={[]}>
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(({ key, name, fieldKey, ...restField }, index) => (
//                 <div
//                   key={key}
//                   className="ant-row ant-row-middle ant-row-no-wrap m-b-8 gap-8"
//                 >
//                   <div className="flex-grow-100">
//                     <Form.Item
//                       {...restField}
//                       name={[name, "keyword"]}
//                       fieldKey={[fieldKey, "keyword"]}
//                       rules={[
//                         { required: true, message: "Keyword is required" },
//                       ]}
//                     >
//                       <Input size="middle" placeholder="Enter keyword" />
//                     </Form.Item>
//                   </div>
//                   {fields.length > 1 && (
//                     <div
//                       className="cursor-pointer icon-16"
//                       onClick={() => remove(name)}
//                     >
//                       <DeleteOutlined />
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <Button
//                 onClick={add}
//                 className="primary-color btn-height-auto m-t-8"
//                 type="link"
//                 icon={<PlusOutlined />}
//               >
//                 Add Search Term
//               </Button>
//             </>
//           )}
//         </Form.List>
//         <Button type="primary" onClick={onSave} className="m-t-16">
//           Save
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default ProductComponent
