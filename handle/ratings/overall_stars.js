const star = {
    s5: '<i class="bi bi-star-fill"></i>'.repeat(5),
    s45: '<i class="bi bi-star-fill"></i>'.repeat(4) + '<i class="bi bi-star-half"></i>',
    s4: '<i class="bi bi-star-fill"></i>'.repeat(4) + '<i class="bi bi-star"></i>',
    s35: '<i class="bi bi-star-fill"></i>'.repeat(3) + '<i class="bi bi-star-half"></i>' + '<i class="bi bi-star"></i>',
    s3: '<i class="bi bi-star-fill"></i>'.repeat(3) + '<i class="bi bi-star"></i>'.repeat(2),
    s25: '<i class="bi bi-star-fill"></i>'.repeat(2) + '<i class="bi bi-star-half"></i>' + '<i class="bi bi-star"></i>'.repeat(2),
    s2: '<i class="bi bi-star-fill"></i>'.repeat(2) + '<i class="bi bi-star">'.repeat(3),
    s15: '<i class="bi bi-star-fill"></i>' + '<i class="bi bi-star-half">' + '<i class="bi bi-star">'.repeat(3),
    s1: '<i class="bi bi-star-fill"></i>' + '<i class="bi bi-star-fill">'.repeat(4)
}

function calculate(f5,f4,f3,f2,f1) {
    return Math.round(parseFloat((5*f5 + 4*f4 + 3*f3 + 2*f2 + 1*f1) / (f5 + f4 + f3 + f2 + f1)).toFixed(2) * 2) / 2
}

function star_html(f5,f4,f3,f2,f1) {
    const dwell = (Math.round(parseFloat((5*f5 + 4*f4 + 3*f3 + 2*f2 + 1*f1) / (f5 + f4 + f3 + f2 + f1)).toFixed(2) * 2) / 2).toString()
    if (dwell.length == 1) {
        dwell + '0'
    }
    const shit = 's'+ dwell.toString().replace('.', '')
    return star[shit]
}