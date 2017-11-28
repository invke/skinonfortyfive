require 'test_helper'

class SkinCancerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get skin_cancer_index_url
    assert_response :success
  end

  test "should get consults" do
    get skin_cancer_consults_url
    assert_response :success
  end

  test "should get removals" do
    get skin_cancer_removals_url
    assert_response :success
  end

end
