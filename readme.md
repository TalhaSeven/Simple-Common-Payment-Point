# Express Payment Validation and Processing API

This project is a simple Express.js application designed to validate payment information and process payments. It provides endpoints to validate credit card details and to make payments using a unique token generated after successful validation.

## Features

- **Validation Endpoint**: Validates credit card number, expiration date, and CVV code.
- **Payment Endpoint**: Processes payment if the provided token matches the one generated after validation.
- **Token Generation**: Generates a unique token upon successful validation of payment details.

## API Endpoints

### Validation Endpoint

- **URL**: `/validation`
- **Method**: `POST`
- **Body**:
  - `cardNumber`: The credit card number (spaces will be ignored).
  - `expMonthYear`: The expiration date in MMYY format.
  - `cvCode`: The 3-digit CVV code.

### Payment Endpoint

- **URL**: `/payment`
- **Method**: `POST`
- **Body**:
  - `code`: The token received from the validation endpoint.
  - `price`: The amount to be paid.

## Notes

- The validation currently only accepts a card number of `0000 1111 2222 3333` for demonstration purposes.
- The token generated for payment processing is unique for each validation request.
- This project is for demonstration purposes and should not be used in production without proper security measures.

---
# Express Ödeme Doğrulama ve İşleme API'si

Bu proje, ödeme bilgilerini doğrulamak ve ödemeleri işlemek için tasarlanmış basit bir Express.js uygulamasıdır. Kredi kartı ayrıntılarını doğrulamak ve başarılı doğrulamadan sonra oluşturulan benzersiz bir belirteç kullanarak ödeme yapmak için uç noktalar sağlar.

## Özellikler

- Doğrulama Uç Noktası**: Kredi kartı numarasını, son kullanma tarihini ve CVV kodunu doğrular.
- Ödeme Bitiş Noktası**: Sağlanan belirteç, doğrulamadan sonra oluşturulan belirteçle eşleşirse ödemeyi işler.
- Jeton Üretimi**: Ödeme ayrıntılarının başarılı bir şekilde doğrulanması üzerine benzersiz bir belirteç oluşturur.

## API Uç Noktaları

### Doğrulama Uç Noktası

- **URL**: `/validation`
- **Metod**: POST`
- **Body**:
  - `cardNumber`: Kredi kartı numarası (boşluklar dikkate alınmayacaktır).
  - `expMonthYear`: MMYY formatında son kullanma tarihi.
  - `cvCode`: 3 haneli CVV kodu.

### Ödeme Uç Noktası

- **URL**: `/payment`
- **Metod**: POST`
- **Body**:
  - `code`: Doğrulama uç noktasından alınan belirteç.
  - `fiyat`: Ödenecek tutar.

## Notlar

- Doğrulama şu anda yalnızca gösterim amaçlı olarak `0000 1111 2222 3333` kart numarasını kabul etmektedir.
- Ödeme işlemi için oluşturulan belirteç, her doğrulama isteği için benzersizdir.
- Bu proje tanıtım amaçlıdır ve uygun güvenlik önlemleri alınmadan üretimde kullanılmamalıdır.
