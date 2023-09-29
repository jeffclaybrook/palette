const N1 = [
    { token: 'N1-0', hex: '#ffffff' },
    { token: 'N1-10', hex: '#f9fcff' },
    { token: 'N1-50', hex: '#e7f2f9' },
    { token: 'N1-100', hex: '#d9e4eb' },
    { token: 'N1-200', hex: '#bdc8cf' },
    { token: 'N1-300', hex: '#a2adb3' },
    { token: 'N1-400', hex: '#889299' },
    { token: 'N1-500', hex: '#6d787e' },
    { token: 'N1-600', hex: '#556066' },
    { token: 'N1-700', hex: '#3e484e' },
    { token: 'N1-800', hex: '#283237' },
    { token: 'N1-900', hex: '#131d22' },
    { token: 'N1-1000', hex: '#000000' }
   ]
   
   const N2 = [
    { token: 'N2-0', hex: '#ffffff' },
    { token: 'N2-10', hex: '#f9fcff' },
    { token: 'N2-50', hex: '#e4f3fb' },
    { token: 'N2-100', hex: '#d6e4ed' },
    { token: 'N2-200', hex: '#bac9d1' },
    { token: 'N2-300', hex: '#9faeb6' },
    { token: 'N2-400', hex: '#84939b' },
    { token: 'N2-500', hex: '#6b7880' },
    { token: 'N2-600', hex: '#536068' },
    { token: 'N2-700', hex: '#3b4950' },
    { token: 'N2-800', hex: '#253239' },
    { token: 'N2-900', hex: '#0f1d23' },
    { token: 'N2-1000', hex: '#000000' }
   ]
   
   const A1 = [
    { token: 'A1-0', hex: '#ffffff' },
    { token: 'A1-10', hex: '#f9fcff' },
    { token: 'A1-50', hex: '#def4ff' },
    { token: 'A1-100', hex: '#bae9ff' },
    { token: 'A1-200', hex: '#7fd1f5' },
    { token: 'A1-300', hex: '#63b5d9' },
    { token: 'A1-400', hex: '#469abd' },
    { token: 'A1-500', hex: '#227fa0' },
    { token: 'A1-600', hex: '#006685' },
    { token: 'A1-700', hex: '#004d65' },
    { token: 'A1-800', hex: '#003547' },
    { token: 'A1-900', hex: '#001f2a' },
    { token: 'A1-1000', hex: '#000000' }
   ]
   
   const A2 = [
    { token: 'A2-0', hex: '#ffffff' },
    { token: 'A2-10', hex: '#fbfcff' },
    { token: 'A2-50', hex: '#e6f2ff' },
    { token: 'A2-100', hex: '#cbe5ff' },
    { token: 'A2-200', hex: '#adc9e6' },
    { token: 'A2-300', hex: '#93aeca' },
    { token: 'A2-400', hex: '#7894ae' },
    { token: 'A2-500', hex: '#5d7992' },
    { token: 'A2-600', hex: '#46617a' },
    { token: 'A2-700', hex: '#2e4961' },
    { token: 'A2-800', hex: '#153349' },
    { token: 'A2-900', hex: '#001d32' },
    { token: 'A2-1000', hex: '#000000' }
   ]
   
   const A3 = [
    { token: 'A3-0', hex: '#ffffff' },
    { token: 'A3-10', hex: '#fdfbff' },
    { token: 'A3-50', hex: '#ebf0ff' },
    { token: 'A3-100', hex: '#d6e3ff' },
    { token: 'A3-200', hex: '#aec7f8' },
    { token: 'A3-300', hex: '#93acdb' },
    { token: 'A3-400', hex: '#7991c0' },
    { token: 'A3-500', hex: '#5e77a3' },
    { token: 'A3-600', hex: '#465e8a' },
    { token: 'A3-700', hex: '#2e4770' },
    { token: 'A3-800', hex: '#153058' },
    { token: 'A3-900', hex: '#001b3f' },
    { token: 'A3-1000', hex: '#000000' }
   ]
   
   function createChips() {
    const container = document.querySelector(".container")
    const palettes = [N1, N2, A1, A2, A3]
    palettes.forEach((palette, i) => {
     const ul = document.createElement("ul")
     container.appendChild(ul)
     const uls = document.querySelectorAll("ul")
     palette.forEach(item => {
      const { token, hex } = item
      const li = document.createElement("li")
      li.innerText = `${token}`
      li.style.background = `${hex}`
      li.addEventListener("click", () => {
       copyHex(hex)
      })
      uls[i].appendChild(li)
     })
    })
   }
   
   function copyHex(color) {
    const clipboard = navigator.clipboard
    clipboard.writeText(color)
    .then(() => showToast(color))
   }
   
   function showToast(color) {
    const toast = document.querySelector(".toast")
    toast.classList.add("visible")
    toast.setAttribute("aria-hidden", false)
    toast.innerText = `Copied ${color}`
    setTimeout(() => {
     toast.classList.remove("visible")
     toast.setAttribute("aria-hidden", true)
     toast.innerText = ""
    }, 2000)
   }
   
   createChips()