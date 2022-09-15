package com.example.demo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Type implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private LocalDate addedDate;

    @Column
    private LocalDate peremptionDate;

    @Column
    private double unitPrice;

    @Column
    private int piecesNumber;

    @Column
    private double totalPrice;

    @Column
    private Unit unit;

    @Column
    private double totalQuantity;

    @Column
    private double unitQuantity;

    @ManyToOne
    private Product product;

    public enum Unit{
        l,pieces,kg,g,ml
    }
}
