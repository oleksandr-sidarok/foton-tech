function modalShow (modalId) {
  let maskElement = document.querySelector('.mask')
  let modalElement = document.querySelector(`#${modalId}`)
  if (modalElement) {
    modalElement.classList.remove('hiden')
    maskElement.classList.remove('hiden')
  }
}

function modalHide (modalId) {
  let maskElement = document.querySelector('.mask')
  let modalList = document.querySelectorAll('.modal')
  modalList.forEach(element => {
    element.classList.add('hiden')
  })
  maskElement.classList.add('hiden')
}

let btns = document.querySelectorAll('.btn')
btns.forEach(element => {
  element.addEventListener('click', function () {
    let id = element.dataset.showmodalid;
    modalHide()
    modalShow(id)
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