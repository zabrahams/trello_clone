# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :title

json.lists @board.lists do |board, list|
  json.id list.id
  json.title list.title

  json.cards list.cards do |list, card|
    json.id card.id
    json.title card.title
  end
end
