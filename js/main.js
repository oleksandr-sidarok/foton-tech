function modalShow (modalId) {
  let maskElement = document.querySelector('.mask')
  let modalElement = document.querySelector(`#${modalId}`)
  if (modalElement) {
    modalElement.classList.remove('hiden')
    maskElement.classList.remove('hiden')
    document.body.classList.add('noscroll')
  }
}

function modalHide (modalId) {
  let maskElement = document.querySelector('.mask')
  let modalList = document.querySelectorAll('.modal')
  modalList.forEach(element => {
    element.classList.add('hiden')
  })
  maskElement.classList.add('hiden')
  document.body.classList.remove('noscroll')
}

let btns = document.querySelectorAll('.btn')
btns.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    let id = element.dataset.showmodalid;
    modalHide()
    modalShow(id)
    console.log(e)
  })
})

let modalCloseBtns = document.querySelectorAll('.modal-close')
modalCloseBtns.forEach(element => {
  element.addEventListener('click', function () {
    modalHide()
  })
})

let maskElement = document.querySelector('.mask')
maskElement.addEventListener('click', function () {
  modalHide()
})