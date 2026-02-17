<!DOCTYPE html>
<html>
<head>
    <title>New Property Inquiry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #22346e;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .section {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        .label {
            font-weight: bold;
            color: #22346e;
        }
        .button {
            display: inline-block;
            background-color: #22346e;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Property Inquiry</h1>
    </div>
    
    <div class="content">
        <div class="section">
            <h2>Contact Information</h2>
            <p><span class="label">Name:</span> {{ $data['name'] ?? 'N/A' }}</p>
            <p><span class="label">Email:</span> {{ $data['email'] ?? 'N/A' }}</p>
            <p><span class="label">Phone:</span> {{ $data['phone'] ?? 'N/A' }}</p>
            <p><span class="label">Date:</span> {{ $data['contact_date'] ?? now()->format('F j, Y \a\t g:i A') }}</p>
        </div>
        
        <div class="section">
            <h2>Property Details</h2>
            <p><span class="label">Property:</span> {{ $data['property_name'] ?? 'Not specified' }}</p>
            @if(!empty($data['property_address']))
            <p><span class="label">Address:</span> {{ $data['property_address'] }}</p>
            @endif
            @if(!empty($data['property_price']))
            <p><span class="label">Price:</span> ${{ number_format($data['property_price']) }}</p>
            @endif
            @if(!empty($data['property_id']))
            <p><span class="label">Property ID:</span> #{{ $data['property_id'] }}</p>
            @endif
        </div>
        
        <div class="section">
            <h2>Message</h2>
            <p style="white-space: pre-line;">{{ $data['message'] ?? 'No message provided' }}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:{{ $data['email'] ?? '' }}" class="button">Reply to {{ $data['name'] ?? 'Client' }}</a>
        </div>
    </div>
    
    <div class="footer">
        <p>This email was sent from {{ config('app.name', 'Your Application') }}</p>
        <p>{{ date('Y') }} - All rights reserved</p>
    </div>
</body>
</html>