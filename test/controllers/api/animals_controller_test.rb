require 'test_helper'

class Api::AnimalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_animals_index_url
    assert_response :success
  end

end
