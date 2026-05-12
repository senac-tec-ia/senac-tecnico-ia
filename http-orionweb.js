const url =
  "https://www.pr.senac.br/orionweb/site/InstrutorChamada.asp?UniCod=9&TurCod=202600029&DisCod=17525&DatCal=20260430&Grp=0"

// COLOQUE SEUS COOKIES AQUI
const cookies = "ASPSESSIONIDAGAQSCAD=AOHDGIIBBJBOLHFOCNHHILHE; tipoLogin=1"

async function testarEndpoint() {
  try {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Cookie: cookies,

        // opcionais
        Referer:
          "https://www.pr.senac.br/orionweb/site/InstrutorCalendario.asp?UniCod=9&TurCod=202600029&DisCod=17525",

        "User-Agent":
          "Mozilla/5.0"
      }
    })

    console.log("STATUS:", response.status)

    const html = await response.text()

    console.log("HTML:")
    console.log(html)

  } catch (err) {
    console.error("ERRO:", err)
  }
}

testarEndpoint()