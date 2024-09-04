import Image1 from '/image/il1.png'
import Image3 from '/image/il3.png'
import Image4 from '/image/il4.png'

export const extrasHtml = () => {
return `
<div class="d-flex justify-content-center align-items-center py-5" style="height:65vh;">
<div class="d-flex col-8 justify-content-center align-items-center">
<div class="col-4 d-flex flex-column">
<img src="${Image1}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${Image3}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${Image4}" class="img-fluid">
<h3></h3>
</div>
</div>
</div>
`
}

