import qcRequset from "@/service"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

function getCategoryGoodsCount() {
  return qcRequset.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
function getCategoryGoodsSale() {
  return qcRequset.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
function getCategoryGoodsFavor() {
  return qcRequset.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
function getAdressGoodsSale() {
  return qcRequset.get({
    url: DashboardAPI.addressGoodsSale
  })
}

export {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAdressGoodsSale
}
