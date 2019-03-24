import { eventBus } from './app'

export const discountCommaFormatMixin = {
    created() {
        eventBus.$on('', (data) => {

        });

    },
    data() {
        return {

        }
    },
    methods: {

        applyDiscount() {

            const discountInput = document.querySelector('.discountInput').value;

            const originalDiscount = Number(this.item.discount);

            if (discountInput == '' || discountInput == 0 || discountInput == null) {
              if (discountInput == '') {
                alert('please provide some number, atleast "0"');
                return;
              } else {
                console.log('fst else')
                  if(this.item.previousPrice !== 0) {
                  const a = this.item.previousPrice;
                  this.item.amount = a;
                  const b = `${a}`;
                  this.commaFormatted(b);
                  this.item.previousPrice = 0;
                  this.item.discount = 0;
                } else {
                  this.item.discount = 0;
                }
              }
              console.log('2 isDid fals')
                this.isdiscount = false;
                return;

            } else if (discountInput === originalDiscount) {
              this.item.discount = originalDiscount;
              this.isdiscount = false;
              console.log('original')
                return;

            } else {
                let m;
              if(this.item.previousPrice === 0) {
                const priceInput = this.item.amount;
                const discountIntoPercentage = discountInput / 100;
                const totalValue = priceInput - (priceInput * discountIntoPercentage);
                 m = totalValue.toFixed(2);
                 this.commaFormatted(m);
                 this.item.amount = m;
                this.item.previousPrice = priceInput;
                this.item.discount = discountInput ;
              } else {
                const priceInput = this.item.previousPrice;
                const discountIntoPercentage = discountInput / 100;
                const totalValue = priceInput - (priceInput * discountIntoPercentage);
                 m = totalValue.toFixed(2);
                 this.commaFormatted(m);
                this.item.amount = m;
                this.item.previousPrice = priceInput;
                this.item.discount = discountInput ;
              }
            }
                console.log('out')
                this.isdiscount = false;
                return;
          },

           commaFormatted(amount) {
            var delimiter = ","; // replace comma if desired
            var a = amount.split('.',2)
            var d = a[1];
            var i = parseInt(a[0]);
            if(isNaN(i)) {
            return '';
            }
            var minus = '';
            if(i < 0) {
            minus = '-';
            }
            i = Math.abs(i);
            var n = new String(i);
            var a = [];
            while(n.length > 3) {
            var nn = n.substr(n.length-3);
            a.unshift(nn);
            n = n.substr(0,n.length-3);
            }
            if(n.length > 0) {
            a.unshift(n);
            }
            n = a.join(delimiter);
            if(d) {
            if(d.length < 1) {
            amount = n;
            } else {
            amount = n + '.' + d;
            }
            } else {
            amount = n
            }
            amount = minus + amount;

            return this.item.strPrice = amount;;
            },


    }
};
