require 'test_helper'

class SkinCareControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get skin_care_index_url
    assert_response :success
  end

  test "should get peels" do
    get skin_care_peels_url
    assert_response :success
  end

  test "should get dermafrac" do
    get skin_care_dermafrac_url
    assert_response :success
  end

  test "should get needling" do
    get skin_care_needling_url
    assert_response :success
  end

  test "should get products" do
    get skin_care_products_url
    assert_response :success
  end

end
