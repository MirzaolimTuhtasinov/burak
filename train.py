# MIT TASK L
def reverseSentence(sentence):
    new_array = []
    new_input = sentence.split(" ")
    for ele in new_input:
        ele2 = reversed(ele)
        final_ele = "".join(ele2)
        new_array.append(final_ele)

    return " ".join(new_array)


result = reverseSentence('we like python!')
print("Result:", result)


def reverseSentence2(input):
    new_array = []
    new_input = input.split(" ")

    for ele in new_input:
        final_ele = "".join(reversed(ele))
        new_array.append(final_ele)

    return " ".join(new_array)


result2 = reverseSentence2("we like coding!")
print("Result2:", result2)
