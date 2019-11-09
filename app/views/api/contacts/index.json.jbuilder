@contacts.each do |contact|
    json.set! contact.contact_id do
        json.partial! 'contact', contact: contact
    end
end