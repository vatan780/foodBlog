const hamburger = document.querySelector('.hamburger')
const sidebar = document.getElementById('sidebar')
const closeMenu = document.getElementById('close-menu')
const sidebarItems = document.querySelectorAll('.sidebar-item')

hamburger.addEventListener('click',()=>{
    sidebar.classList.add('active')
})
const  closeSidebar = () =>sidebar.classList.remove('active')
closeMenu.addEventListener('click',closeSidebar)
sidebarItems.forEach(item=>item.addEventListener('click',closeSidebar))




