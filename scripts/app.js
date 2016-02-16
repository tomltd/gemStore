(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Azurite',
      price: 2.95,
      description: 'This gem has lots of sides',
      images: [
        {
          full: 'http://placebear.com/300/300',
          thumb: 'http://placebear.com/100/100'
        },
        {
          full: 'http://placebear.com/300/200',
          thumb: 'http://placebear.com/50/50'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    { name: 'Bloodstone',
      price: 5.95,
      description: 'This gem has lots of sides',
      images: [
        {
          full: 'http://placebear.com/300/300',
          thumb: 'http://placebear.com/100/100'
        },
        {
          full: 'http://placebear.com/300/200',
          thumb: 'http://placebear.com/50/50'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    { name: 'Zircon',
      price: 3.95,
      description: 'This gem has lots of sides',
      images: [
        {
          full: 'http://placebear.com/300/300',
          thumb: 'http://placebear.com/100/100'
        },
        {
          full: 'http://placebear.com/300/200',
          thumb: 'http://placebear.com/50/50'
        }
      ],
      canPurchase: true,
      soldOut: false
    }
  ];
})();
