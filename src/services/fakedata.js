const formdata = [
  {
    type: "text",
    field: "name",
    label: "Tên của bạn là gì",
    required: true
  },
  {
    type: "text",
    inputType: "email",
    field: "email",
    label: "Địa chỉ email",
    required: true
  },
  {
    type: "textarea",
    field: "reason",
    label: "Lý do bạn đăng ký tham gia sự kiện?",
    required: true
  },
  // {
  //   type: "multi-checkbox",
  //   field: "job-title",
  //   label: "Bạn thuộc đối tượng nào?",
  //   list: [
  //     "Học sinh",
  //     "Sinh viên",
  //     "Lập trình viên"
  //   ]
  // },
  {
    type: "radio",
    field: "job_title",
    label: "Bạn thuộc đối tượng nào",
    list: [
      "Học sinh",
      "Sinh viên",
      "Lập trình viên"
    ]
  },
  {
    type: "radio",
    field: "gender",
    label: "Giới tính",
    list: [
      "Nam",
      "Nữ"
    ]
  }
]

export { formdata }