Rails.application.routes.draw do
  get 'varicose_veins/index'

  get 'varicose_veins/laser'

  get 'varicose_veins/sclero'

  get 'varicose_veins/spider'

  get 'hair_care/transplant'

  get 'hair_care/index'

  get 'skin_cancer/index'

  get 'skin_cancer/consults'

  get 'skin_cancer/removals'

  get 'laser/index'

  get 'laser/hair'

  get 'laser/veins'

  get 'laser/pigment'

  get 'appearance_medicine/index'

  get 'appearance_medicine/prp'

  get 'appearance_medicine/filler'

  get 'appearance_medicine/botulinum'

  get 'skin_care/index'

  get 'skin_care/peels'

  get 'skin_care/dermafrac'

  get 'skin_care/needling'

  get 'skin_care/products'

  get 'treatments/index'

  get 'treatments/skinCare'

  get 'treatments/appearanceMedicine'

  get 'treatments/laser'

  get 'treatments/skinCancer'

  get 'treatments/hairCare'

  get 'treatments/varicoseVeins'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
