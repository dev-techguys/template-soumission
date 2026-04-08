import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Service de courriel non configuré (RESEND_API_KEY ou RESEND_FROM_EMAIL manquant)" },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const {
      clientName,
      clientEmail,
      notificationEmail,
      planName,
      planHours,
      engagementType,
      pricePerHour,
      monthlyTotal,
      monthlySaving,
      signatureData
    } = body

    const signatureDate = new Date().toLocaleDateString('fr-CA')
    const signatureTime = new Date().toLocaleTimeString('fr-CA')

    const signatureBuffer = signatureData
      ? Buffer.from(signatureData.replace(/^data:image\/png;base64,/, ''), 'base64')
      : null

    const clientHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2d3748; margin: 0; padding: 0; background-color: #f7f7f7; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #387B84 0%, #2d6269 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
    .content { background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .greeting { font-size: 18px; margin-bottom: 20px; }
    .contract-box { background: #f8fafb; border: 1px solid #e2e8f0; border-radius: 10px; padding: 25px; margin: 25px 0; }
    .contract-box h3 { color: #387B84; margin: 0 0 20px; font-size: 18px; }
    .contract-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .contract-row:last-child { border-bottom: none; }
    .contract-label { color: #6b7280; }
    .contract-value { font-weight: 600; color: #2d3748; }
    .saving { color: #22c55e; font-weight: 600; }
    .signature-section { margin-top: 30px; padding: 20px; background: #fef7f0; border-radius: 10px; border: 1px solid #F6A878; }
    .signature-section h4 { color: #387B84; margin: 0 0 15px; }
    .signature-img { max-width: 300px; border: 1px solid #e2e8f0; border-radius: 8px; background: white; padding: 10px; }
    .footer { text-align: center; padding: 30px; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Contrat Sign&eacute;</h1>
      <p>Merci pour votre confiance!</p>
    </div>
    <div class="content">
      <p class="greeting">Bonjour ${clientName},</p>
      <p>Nous vous confirmons la signature de votre contrat de banque d'heures avec <strong>TechGuys</strong>.</p>
      <div class="contract-box">
        <h3>D&eacute;tails du contrat</h3>
        <div class="contract-row">
          <span class="contract-label">Forfait</span>
          <span class="contract-value">${planName} (${planHours}/mois)</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Type d'engagement</span>
          <span class="contract-value">${engagementType}</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Tarif horaire</span>
          <span class="contract-value">${pricePerHour}</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Total mensuel</span>
          <span class="contract-value">${monthlyTotal}$/mois</span>
        </div>
        ${monthlySaving > 0 ? `<div class="contract-row"><span class="contract-label">&#201;conomie mensuelle</span><span class="contract-value saving">-${monthlySaving}$/mois</span></div>` : ''}
      </div>
      <div class="signature-section">
        <h4>Votre signature</h4>
        <p style="margin: 0 0 15px; color: #6b7280; font-size: 14px;">Sign&eacute;e le ${signatureDate} &agrave; ${signatureTime}</p>
        ${signatureData ? `<img src="cid:signature" alt="Signature" class="signature-img" />` : '<p>Signature enregistr&eacute;e</p>'}
      </div>
      <p style="margin-top: 30px;">Notre &eacute;quipe vous contactera sous peu pour planifier le d&eacute;marrage de votre accompagnement.</p>
      <p>En cas de questions, n'h&eacute;sitez pas &agrave; nous contacter.</p>
      <p style="margin-top: 30px;">Cordialement,<br><strong>L'&eacute;quipe TechGuys</strong></p>
    </div>
    <div class="footer">
      <p>Ce courriel confirme votre signature &eacute;lectronique.</p>
    </div>
  </div>
</body>
</html>`.trim()

    const techguysHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2d3748; margin: 0; padding: 0; background-color: #f7f7f7; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .content { background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .client-info { background: #f0fdf4; border: 1px solid #22c55e; border-radius: 10px; padding: 20px; margin-bottom: 25px; }
    .client-info h3 { color: #16a34a; margin: 0 0 15px; }
    .contract-box { background: #f8fafb; border: 1px solid #e2e8f0; border-radius: 10px; padding: 25px; margin: 25px 0; }
    .contract-box h3 { color: #387B84; margin: 0 0 20px; }
    .contract-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .contract-row:last-child { border-bottom: none; }
    .contract-label { color: #6b7280; }
    .contract-value { font-weight: 600; color: #2d3748; }
    .signature-img { max-width: 300px; border: 1px solid #e2e8f0; border-radius: 8px; background: white; padding: 10px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouveau Contrat Sign&eacute;!</h1>
    </div>
    <div class="content">
      <div class="client-info">
        <h3>Information Client</h3>
        <p style="margin: 5px 0;"><strong>Nom:</strong> ${clientName}</p>
        <p style="margin: 5px 0;"><strong>Courriel:</strong> ${clientEmail}</p>
        <p style="margin: 5px 0;"><strong>Date de signature:</strong> ${signatureDate} &agrave; ${signatureTime}</p>
      </div>
      <div class="contract-box">
        <h3>D&eacute;tails du contrat</h3>
        <div class="contract-row">
          <span class="contract-label">Forfait</span>
          <span class="contract-value">${planName} (${planHours}/mois)</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Type d'engagement</span>
          <span class="contract-value">${engagementType}</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Tarif horaire</span>
          <span class="contract-value">${pricePerHour}</span>
        </div>
        <div class="contract-row">
          <span class="contract-label">Total mensuel</span>
          <span class="contract-value">${monthlyTotal}$/mois</span>
        </div>
        ${monthlySaving > 0 ? `<div class="contract-row"><span class="contract-label">&#201;conomie mensuelle</span><span class="contract-value" style="color: #22c55e;">-${monthlySaving}$/mois</span></div>` : ''}
      </div>
      <div>
        <h4 style="color: #387B84;">Signature du client</h4>
        ${signatureData ? `<img src="cid:signature" alt="Signature" class="signature-img" />` : '<p>Signature enregistr&eacute;e</p>'}
      </div>
    </div>
  </div>
</body>
</html>`.trim()

    const attachments: Array<{ filename: string; content: Buffer; cid: string }> = []

    if (signatureBuffer) {
      attachments.push({
        filename: 'signature.png',
        content: signatureBuffer,
        cid: 'signature'
      })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL!

    // Notification email: from proposal-data (passed in body), fallback to env variable
    const techguysEmail = notificationEmail || process.env.RESEND_NOTIFICATION_EMAIL || ''

    if (!techguysEmail) {
      return NextResponse.json(
        { success: false, error: "Email de notification non configuré (notificationEmail manquant dans proposal-data.ts)" },
        { status: 500 }
      )
    }

    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: fromEmail,
      to: clientEmail,
      subject: `Confirmation de votre contrat - ${planName}`,
      html: clientHtmlContent,
      attachments
    })

    if (clientEmailResult.error) {
      throw new Error(`Client email: ${clientEmailResult.error.message}`)
    }

    // Send notification email to the designated TechGuys contact
    const techguysEmailResult = await resend.emails.send({
      from: fromEmail,
      to: techguysEmail,
      subject: `Nouveau contrat signé - ${clientName} - ${planName}`,
      html: techguysHtmlContent,
      attachments
    })

    if (techguysEmailResult.error) {
      throw new Error(`Notification email: ${techguysEmailResult.error.message}`)
    }

    return NextResponse.json({
      success: true,
      message: "Courriels envoyés avec succès",
      data: {
        clientEmailId: clientEmailResult.data?.id,
        techguysEmailId: techguysEmailResult.data?.id
      }
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue"
    return NextResponse.json(
      { success: false, error: `Erreur lors de l'envoi des courriels: ${errorMessage}` },
      { status: 500 }
    )
  }
}
