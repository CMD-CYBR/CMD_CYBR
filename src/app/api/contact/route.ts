import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, subject, message, inquiryType, company, phone } = body
    
    if (!name || !email || !subject || !message || !inquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Nodemailer, etc.
    // 2. Save to a database
    // 3. Send to a CRM system
    // 4. Create a support ticket
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      inquiryType,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        id: `contact-${Date.now()}` // Generate a simple ID
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
