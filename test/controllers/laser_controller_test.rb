require 'test_helper'

class LaserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get laser_index_url
    assert_response :success
  end

  test "should get hair" do
    get laser_hair_url
    assert_response :success
  end

  test "should get veins" do
    get laser_veins_url
    assert_response :success
  end

  test "should get pigment" do
    get laser_pigment_url
    assert_response :success
  end

  test "should get genesis" do
    get laser_genesis_url
    assert_response :success
  end

end
