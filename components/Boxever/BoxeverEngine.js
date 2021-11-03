/* eslint-disable no-undef */
export function createViewEvent(page) {
  console.log(` -> Boxever.viewEvent(${page})`);
  sendEvent(page, 'VIEW');
}

export function identifyUser(page, email, firstname, lastname) {
  console.log(` -> Boxever.idenfityUser(${page})`);
  sendEvent(page, 'IDENTITY', email, firstname, lastname);
}

export function createAddEvent(page, product) {
  console.debug(` -> Boxever.createAddEvent(${page})`);
  _boxeverq.push(function () {
    var viewEvent = {
      'browser_id': Boxever.getID(),
      'channel': 'WEB',
      'type': 'ADD',
      'language': 'EN',
      'currency': 'EUR',
      'page': page,
      'pos': 'tworichardsmusicstore',
      'product': {
        'type': 'Instrument',
        'name': product.productName,
        'item_id': product.id,
        'orderedAt': Date.now(),
        'quantity': 1,
        'price': product.price,
        'productId': product.id,
        'currencyCode': 'EUR',
        'referenceId': 'Instrument_001-1'
      }
    };
    //Add UTM params
    viewEvent = Boxever.addUTMParams(viewEvent);
    // Invoke event create 
    // (<event msg>, <callback function>, <format>)
    Boxever.eventCreate(viewEvent, function (data) { }, 'json');
  });
}

export function createAddConsumers() {
  const message = {
    'channel': 'WEB',
    'type': 'ADD_CONSUMERS',
    'language': 'EN',
    'currency': 'EUR',
    'page': 'payment page',
    'pos': 'tworichardsmusicstore',
    'browser_id': Boxever.getID(),
    'consumer': [{
      'title': 'Mr',
      'firstname': 'Richard',
      'lastname': 'Seal',
      'dob': '1977-12-20T00:00',
      'gender': 'male',
      'mobile': '+15555555555',
      'nationality': 'United Kingdom',
      'reference_id': '1',
      'item_id': [
        'FLIGHT_1',
        'FLIGHT_2',
        'BAG_1',
        'SEAT_1'
      ]
    }]
  };
  Boxever.eventCreate(message, function (data) { }, 'json');
}

export function createAddContacts() {
  const message = {
    'channel': 'WEB',
    'type': 'ADD_CONTACTS',
    'language': 'EN',
    'currency': 'EUR',
    'page': 'home page',
    'pos': 'tworichardsmusicstore',
    'browser_id': Boxever.getID(),
    'contact': [{
      'title': 'Mr',
      'firstname': 'Richard',
      'lastname': 'Seal',
      'mobile': '(+353)1234567',
      'phone': '(+353)1234568',
      'street': ['123 Fake Street'],
      'city': 'Dublin',
      'country_code': 'IE',
      'postal_code': '1234',
      'dob': '1975-04-23T00:00',
      'email': 'jack.smith@boxever.com',
      'gender': 'male'
    }]
  };
  Boxever.eventCreate(message, function (data) { }, 'json');
}

export function createConfirmMessage() {
  const message = {
    'channel': 'WEB',
    'type': 'CONFIRM',
    'language': 'EN',
    'currency': 'EUR',
    'page': 'home page',
    'pos': 'tworichardsmusicstore',
    'browser_id': Boxever.getID(),
    'product': [{
      'item_id': 'EzNB7-ADWkGPj7T0kua2KA'
    }]
  };
  Boxever.eventCreate(message, function (data) { }, 'json');
}

export function createCheckout() {
  const message = {
    'channel': 'WEB',
    'type': 'CHECKOUT',
    'language': 'EN',
    'currency': 'EUR',
    'page': 'home page',
    'pos': 'tworichardsmusicstore',
    'browser_id': Boxever.getID(),
    'reference_id': 'ABC123',
    'status': 'PURCHASED'
  };
  Boxever.eventCreate(message, function (data) { }, 'json');
}

export function closeSession() {
  const closeSession = {
    type: 'FORCE_CLOSE',
    channel: 'WEB',
    browser_id: Boxever.getID(),
    pos: 'tworichardsmusicstore',
    _bx_extended_message: '1',
    page: '/home'
  };
  Boxever.eventCreate(closeSession, function (data) { }, 'json');
}

function sendEvent(page, eventType, email, firstname, lastname) {
  _boxeverq.push(function () {
    var viewEvent = {
      'browser_id': Boxever.getID(),
      'channel': 'WEB',
      'type': eventType,
      'language': 'EN',
      'currency': 'EUR',
      'page': page,
      'pos': 'tworichardsmusicstore',
      'email': email,
      'firstname': firstname,
      'lastname': lastname,
      'extensions': {
        'propensityToPurchase': 1
      }
    };
    //Add UTM params
    viewEvent = Boxever.addUTMParams(viewEvent);
    // Invoke event create 
    // (<event msg>, <callback function>, <format>)
    Boxever.eventCreate(viewEvent, function (data) { }, 'json');
  });
}