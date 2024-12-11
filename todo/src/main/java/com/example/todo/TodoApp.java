package com.example.todo;

import java.util.Scanner;

public class TodoApp {

    private static TodoList todoList = new TodoList();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            printMenu();
            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume the newline character

            switch (choice) {
                case 1:
                    addTask();
                    break;
                case 2:
                    listTasks();
                    break;
                case 3:
                    removeTask();
                    break;
                case 4:
                    System.out.println("Exiting the application.");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void printMenu() {
        System.out.println("\nTodo List Menu:");
        System.out.println("1. Add Task");
        System.out.println("2. List Tasks");
        System.out.println("3. Remove Task");
        System.out.println("4. Exit");
        System.out.print("Choose an option: ");
    }

    private static void addTask() {
        System.out.print("Enter the task description: ");
        String taskDescription = scanner.nextLine();
        todoList.addTask(taskDescription);
        System.out.println("Task added!");
    }

    private static void listTasks() {
        System.out.println("\nYour Todo List:");
        todoList.listTasks();
    }

    private static void removeTask() {
        System.out.print("Enter the task number to remove: ");
        int taskNumber = scanner.nextInt();
        if (todoList.removeTask(taskNumber)) {
            System.out.println("Task removed.");
        } else {
            System.out.println("Invalid task number.");
        }
    }
}
