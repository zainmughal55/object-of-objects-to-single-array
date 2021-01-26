const stores = {
  ebay: {
    discount: [
      {
        verified: true,
        percent: "$5",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Take $5 Off On Your eBay Purchase Using Coupon",
        p:
          "Newly registered users can get a $5 off savings coupon to be used on your next eBay purchase. Select users and eligible products only.",
        button: "Get Coupon",
        coupon: "WELCOM5",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/"
      },
      {
        verified: false,
        percent: "SAVE",
        savingType: "WITH",
        type: "Coupon Code",
        h1: "$600 off Select Luxury Watches $3,000+",
        p: "Save $600 off with coupon",
        button: "Get Coupon",
        coupon: "PICKLUXE21",
        credit: "Expires soon!",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "1%",
        savingType: "OFF",
        type: "PROMO",
        h1: "Get 1% back in eBay Bucks with PayPal",
        p:
          "US Customers get 1% back in eBay Bucks on qualifying items when paying w/ PayPal",
        button: "Get This Deal",
        coupon: "NO CODE REQUIRED",
        credit: "in eBay coupons",
        rediretUrl:
          "https://my.ebay.com/ws/eBayISAPI.dll?RewardsExtEnroll&CTASignup=false&ExtLanding=true"
      },
      {
        verified: false,
        percent: "FREE",
        savingType: "SHIPPING",
        type: "PROMO",
        h1: "Free Shipping and More Savings on Daily Deals!",
        p:
          "Get Free Shipping and Save Every Day with Daily Deals at eBay Deals! ",
        button: "Get This Deal",
        coupon: "NO CODE REQUIRED",
        credit: "in eBay coupons",
        rediretUrl:
          "https://my.ebay.com/ws/eBayISAPI.dll?RewardsExtEnroll&CTASignup=false&ExtLanding=true"
      },
      {
        verified: false,
        percent: "10%",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Save 10% Off",
        p: "Score 10% off with promo code",
        button: "Get Coupon",
        coupon: "PURCHASE10",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "15%",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Save 15% Off",
        p: "Score 15% off with promo code",
        button: "Get Coupon",
        coupon: "POPUPNOV15",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "$5",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Take $5 Off Using Code",
        p: "Receive $5 Off When You Use Promo Code",
        button: "Get Coupon",
        coupon: "TAKEFIVEOFF",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      }
    ]
  },
  levis: {
    discount: [
      {
        verified: true,
        percent: "$5",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Take $5 Off On Your eBay Purchase Using Coupon",
        p:
          "Newly registered users can get a $5 off savings coupon to be used on your next eBay purchase. Select users and eligible products only.",
        button: "Get Coupon",
        coupon: "WELCOM5",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/"
      },
      {
        verified: false,
        percent: "SAVE",
        savingType: "WITH",
        type: "Coupon Code",
        h1: "$600 off Select Luxury Watches $3,000+",
        p: "Save $600 off with coupon",
        button: "Get Coupon",
        coupon: "PICKLUXE21",
        credit: "Expires soon!",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "1%",
        savingType: "OFF",
        type: "PROMO",
        h1: "Get 1% back in eBay Bucks with PayPal",
        p:
          "US Customers get 1% back in eBay Bucks on qualifying items when paying w/ PayPal",
        button: "Get This Deal",
        coupon: "NO CODE REQUIRED",
        credit: "in eBay coupons",
        rediretUrl:
          "https://my.ebay.com/ws/eBayISAPI.dll?RewardsExtEnroll&CTASignup=false&ExtLanding=true"
      },
      {
        verified: false,
        percent: "FREE",
        savingType: "SHIPPING",
        type: "PROMO",
        h1: "Free Shipping and More Savings on Daily Deals!",
        p:
          "Get Free Shipping and Save Every Day with Daily Deals at eBay Deals! ",
        button: "Get This Deal",
        coupon: "NO CODE REQUIRED",
        credit: "in eBay coupons",
        rediretUrl:
          "https://my.ebay.com/ws/eBayISAPI.dll?RewardsExtEnroll&CTASignup=false&ExtLanding=true"
      },
      {
        verified: false,
        percent: "10%",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Save 10% Off",
        p: "Score 10% off with promo code",
        button: "Get Coupon",
        coupon: "PURCHASE10",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "15%",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Save 15% Off",
        p: "Score 15% off with promo code",
        button: "Get Coupon",
        coupon: "POPUPNOV15",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      },
      {
        verified: false,
        percent: "$5",
        savingType: "OFF",
        type: "Coupon Code",
        h1: "Take $5 Off Using Code",
        p: "Receive $5 Off When You Use Promo Code",
        button: "Get Coupon",
        coupon: "TAKEFIVEOFF",
        credit: "in eBay coupons",
        rediretUrl: "https://www.ebay.com/e/fashion/watches-sfc-012521"
      }
    ]
  }
};
let singleArr = [];
Object.values(stores).forEach(item => {
  singleArr = [...singleArr, ...item.discount];
});
console.log(singleArr);
