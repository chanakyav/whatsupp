@contacts.each do |contact|
    json.set! contact.id do
        json.partial! 'contact', contact: contact
    end
end