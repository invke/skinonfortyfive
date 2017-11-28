require 'test_helper'

class VaricoseVeinsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get varicose_veins_index_url
    assert_response :success
  end

  test "should get laser" do
    get varicose_veins_laser_url
    assert_response :success
  end

  test "should get sclero" do
    get varicose_veins_sclero_url
    assert_response :success
  end

  test "should get spider" do
    get varicose_veins_spider_url
    assert_response :success
  end

end
