function upload() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("02 - UPLOAD CONCLUÍDO")
            resolve()
        }, 2000)
    })
}

async function uploadDeFoto() {
    console.log("01 - INICIANDO UPLOAD DE FOTO")
    await upload()
    console.log("03 - EXECUÇÃO FINALIZADA")
}

uploadDeFoto()