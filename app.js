function createData() {
  const name = document.querySelector(".name").value;
  const position = document.querySelector(".position").value;
  const phone = document.querySelector(".phone").value;
  const email = document.querySelector(".email").value;

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  style="
    font-family: Arial, 'Helvetica Neue', 'Helvetica', Helvetica, sans-serif;
    box-sizing: border-box;
    font-size: 13px;
    margin: 0;
    padding: 0;
  "
>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Formularz kontaktowy</title>
  </head>
  <body
    style="
      font-family: Arial, 'Helvetica Neue', 'Helvetica', Helvetica, sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    "
  >
    <table"
      cellpadding="0"
      cellspacing="0"
      class="table__StyledTable-sc-1avdl6r-0 jWJRxL"
      style="
        vertical-align: -webkit-baseline-middle;
        font-size: medium;
        font-family: Arial;
        border-radius: 15px;
        height: 190px;
        max-height: 190px !important;
      "
    >
      <tbody display: block; border-radius: 15px;">
        <tr >
          <td >
            <table
              cellpadding="0"
              cellspacing="0"
              class="table__StyledTable-sc-1avdl6r-0 jWJRxL"
              style="
                vertical-align: -webkit-baseline-middle;
                font-size: medium;
                font-family: Arial;
                height: 190px;
              "
            >
              <tbody >
                <tr >
                  <td width="180" >
                    <img
                      src="https://uploads-ssl.webflow.com/63086d41671f3bfcf18a5762/642eb867e2730125646f80e8_Frame%20418.png"
                      role="presentation"
                      class="image__StyledImage-sc-hupvqm-0 fQKUvi"
                      style="width: 140px; display: block"
                    />
                  </td>
                  <td style="vertical-align: middle; ">
                    <h2
                      color="#000000"
                      class="name__NameContainer-sc-1m457h3-0 hkyYrA"
                      style="
                        margin: 0px;
                        font-size: 16px;
                        font-weight: 700;
                        margin-bottom: 20px;
                        color: #000000;
                      "
                    >
                      <span>${name}</span>
                    </h2>
                    <p
                      font-size="medium"
                      class="job-title__Container-sc-1hmtp73-0 iJcqpv"
                      style="
                        margin: 0px;
                        font-size: 12px;
                        margin-bottom: 5px;
                        color: #000000
                      "
                    >
                      <span>${position}</span>
                    </p>
                    <p
                      font-size="medium"
                      class="company-details__CompanyContainer-sc-j5pyy8-0 bEBXsp"
                      style="
                        margin: 0px;
                        font-weight: 500;
                        font-size: 11px;
                        margin-bottom: 5px;
                      "
                    >
                      <a
                        href="tel:${phone}"
                        class="contact-info__ExternalLink-sc-mmkjr6-2 bibcmr"
                        style="
                          text-decoration: none;
                          font-size: 12px;
                          color: #000000;
                        "
                        ><span>${phone}</span></a
                      >
                    </p>
                    <p
                      font-size="medium"
                      class="company-details__CompanyContainer-sc-j5pyy8-0 bEBXsp"
                      style="
                        margin: 0px;
                        font-weight: 500;
                        font-size: 11px;
                        margin-bottom: 5px;
                      "
                    >
                      <a
                        href="mailto:${email}"
                        class="contact-info__ExternalLink-sc-mmkjr6-2 bibcmr"
                        style="
                          text-decoration: none;
                          font-size: 12px;
                          color: #000000;
                        "
                        ><span>${email}</span></a
                      >
                    </p>
                    <p
                      font-size="medium"
                      class="company-details__CompanyContainer-sc-j5pyy8-0 bEBXsp"
                      style="
                        margin: 0px;
                        font-weight: 400;
                        font-size: 11px;
                      "
                    >
                      <a
                        href="https://www.ulam.io/"
                        class="contact-info__ExternalLink-sc-mmkjr6-2 bibcmr"
                        style="
                          text-decoration: none;
                          font-size: 12px;
                          color: #000000;
                        "
                        ><span>ulam.io</span></a
                      >
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  </html>
  `;
}

const downloadBtn = document.querySelector(".download");

function download(filename, text) {
  downloadBtn.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  downloadBtn.setAttribute("download", filename);
}

downloadBtn.addEventListener("click", () =>
  download("footer.html", createData())
);
