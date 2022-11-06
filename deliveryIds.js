const findUniqueId = deliveryIds => {
  var uniqueDeliveryId = 0;

   deliveryIds.forEach(deliveryId => {
     uniqueDeliveryId ^= deliveryId;
   });

   return uniqueDeliveryId;
}

const arr = [1,2,3,4,54,4,3,2,1]
console.log(findUniqueId(arr))
