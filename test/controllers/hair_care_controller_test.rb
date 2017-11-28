require 'test_helper'

class HairCareControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hair_care_index_url
    assert_response :success
  end

  test "should get transplant" do
    get hair_care_transplant_url
    assert_response :success
  end

end
