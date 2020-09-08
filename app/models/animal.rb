class Animal < ApplicationRecord
  def self.search(search, depth)
    # Animal.where('name ILIKE ?', "%#{search}%")
    # Animal.where('substr(name, 1, 1) = ?', "#{search}")
    # Animal.where('substr(name, 1, 1) = ? OR substr(name, 1, 1) = ?', search.upcase, search.downcase)
    # Animal.where('substr(name, 1, 2) = ? OR substr(name, 1, 2) = ?', search.upcase, search.downcase) ##
    Animal.where("substr(name, 1, #{depth}) ILIKE ?", search)

  end
end
