require 'test_helper'

class TreatmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get treatments_index_url
    assert_response :success
  end

  test "should get skinCare" do
    get treatments_skinCare_url
    assert_response :success
  end

  test "should get appearanceMedicine" do
    get treatments_appearanceMedicine_url
    assert_response :success
  end

  test "should get laser" do
    get treatments_laser_url
    assert_response :success
  end

  test "should get skinCancer" do
    get treatments_skinCancer_url
    assert_response :success
  end

  test "should get hairCare" do
    get treatments_hairCare_url
    assert_response :success
  end

  test "should get varicoseVeins" do
    get treatments_varicoseVeins_url
    assert_response :success
  end

end
