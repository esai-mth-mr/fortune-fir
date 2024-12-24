// Type for the payment form data
export interface PaymentFormData {
  //price_amount: number; // Amount to pay
  //price_currency: string; // Fiat currency (e.g., USD, EUR)
  pay_currency: string; // Crypto currency (e.g., BTC, ETH)
  //ipn_callback_url: string; // Callback URL for payment updates
  //order_id?: string; // Optional order ID
  //order_description?: string; // Optional order description
}

// Type for the NOWPayments API response
export interface PaymentResponse {
  payment_id: string; // Unique ID for the payment
  payment_status: string; // Status of the payment
  pay_address: string; // Crypto address for payment
  payment_url: string; // URL for the payment page
  price_amount: number; // Amount to pay in fiat
  price_currency: string; // Fiat currency
  pay_amount: number; // Amount to pay in crypto
  pay_currency: string; // Crypto currency
  order_id?: string; // Optional order ID
  order_description?: string; // Optional order description
}
