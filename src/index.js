function createElement () {
  const element = document.createElement('div')
  element.innerHTML = '1+1=?';
  return element
}
document.body.appendChild(createElement())