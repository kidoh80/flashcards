import os
import random

continueLoop = True

random_nums = [x for x in range(1,13)]
random.shuffle(random_nums)
while (len(random_nums)>0):
    first_num = random.randint(3,3)
    second_num = random_nums[0]
    actual_answer = first_num * second_num
    user_answer = int(input("What is " + str(first_num) + " X " + str(second_num) + "? "))
    if (user_answer == actual_answer):
        print("\nCORRECT!!!\n")
        random_nums.pop(0)
    else:
        print("\nSorry. The correct answer is " + str(actual_answer) + ".\n")
    g = input("Press enter to continue or q to quit: ")
    random.shuffle(random_nums)

    os.system("clear")
print ("CONGRATULATIONS!!! All done!")
