require 'test_helper'

class AppearanceMedicineControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get appearance_medicine_index_url
    assert_response :success
  end

  test "should get prp" do
    get appearance_medicine_prp_url
    assert_response :success
  end

  test "should get filler" do
    get appearance_medicine_filler_url
    assert_response :success
  end

  test "should get botulinum" do
    get appearance_medicine_botulinum_url
    assert_response :success
  end

end
